package com.godswork.project.mgnt.tool.service;

import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

@Service
public class MapValidationErrorsService {

    public ResponseEntity<?> MapValidationErrorsService(BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            Map<String, Object> errors = bindingResult.getFieldErrors()
                    .stream().collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
            return new ResponseEntity<Map<String, Object>>(errors, HttpStatus.BAD_REQUEST);
        }
        return null;
    }


}
