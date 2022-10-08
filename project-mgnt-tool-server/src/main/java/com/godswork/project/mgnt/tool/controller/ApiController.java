package com.godswork.project.mgnt.tool.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.godswork.project.mgnt.tool.model.Project;
import com.godswork.project.mgnt.tool.service.MapValidationErrorsService;
import com.godswork.project.mgnt.tool.service.ProjectService;

@RestController
@RequestMapping(value = "/api/v1/")
public class ApiController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private MapValidationErrorsService mapValidationErrorsService;


    @PostMapping
    public ResponseEntity<?> createProject(@Valid @RequestBody Project project, BindingResult bindingResult) {
        ResponseEntity<?> errors = mapValidationErrorsService.MapValidationErrorsService(bindingResult);
        if (errors != null) return errors;
        Project project1 = projectService.saveProject(project);
        return new ResponseEntity<Project>(project1, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<Project> getAllProject() {
        return projectService.findAllProject();
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<?> getByProjectId(@PathVariable String projectId) {
        return new ResponseEntity<Project>(projectService.findByProjectId(projectId), HttpStatus.OK);
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteByProjectId(@PathVariable String projectId){
        projectService.deleteByProjectId(projectId);
        return new ResponseEntity<String>(projectId.toUpperCase()+" deleted.", HttpStatus.OK);
    }
}
