package com.godswork.project.mgnt.tool.respository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.godswork.project.mgnt.tool.model.Project;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {
    Project findByProjectIdentifier(String projectId);
    Iterable<Project> findAll();
}
