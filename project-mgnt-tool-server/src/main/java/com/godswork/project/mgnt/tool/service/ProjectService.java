package com.godswork.project.mgnt.tool.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.godswork.project.mgnt.tool.exception.ProjectIdException;
import com.godswork.project.mgnt.tool.exception.ProjectIdNotFoundException;
import com.godswork.project.mgnt.tool.model.Project;
import com.godswork.project.mgnt.tool.respository.ProjectRepository;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveProject(Project project) {
        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        } catch (Exception ex) {
            throw new ProjectIdException("Project id '"
                    + project.getProjectIdentifier().toUpperCase() + "' already exist");
        }


    }

    public Iterable<Project> findAllProject() {
        return projectRepository.findAll();
    }

    public Project findByProjectId(String projectId) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if(project == null) {
            throw new ProjectIdNotFoundException("Project id '"
                    + projectId.toUpperCase() + "' don't exist");
        }
        return project;
    }

    public void deleteByProjectId(String projectId) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if(project == null) {
            throw new ProjectIdNotFoundException("Project id '"
                    + projectId.toUpperCase() + "' don't exist");
        }
        projectRepository.delete(project);
    }
}
