package com.example.demo.controller;

import com.example.demo.entity.Service;
import com.example.demo.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/service")
public class ServiceController {
    @Autowired
    private ServiceService serviceService;

    @GetMapping(value = "/list")
    public ResponseEntity<Page<Service>> listAllService(@PageableDefault(size = 4) Pageable pageable) {
        Page<Service> serviceList = serviceService.findAllService(pageable);
        if (serviceList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(serviceList, HttpStatus.OK);
    }

    @GetMapping(value = "/list/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Service> getService(@PathVariable("id") String serviceId) {
        System.out.println("Fetching Service with serviceId" + serviceId);
        Service service = serviceService.findServiceById(serviceId);
        if (service == null) {
            System.out.println("Service with serviceId" + serviceId + "not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(service, HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<Service> deleteService(@PathVariable("id") String serviceId) {
        System.out.println("Fetching and Deleting Service with service id" + serviceId);
        Service service = serviceService.findServiceById(serviceId);

        if (service == null) {
            System.out.println("Unable to delete. Service with serviceId" + serviceId + "not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        serviceService.deleteService(serviceId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/search")
    public ResponseEntity<Page<Service>> searchService(@RequestParam("searchName") String searchName,
                                                 @PageableDefault(size = 3) Pageable pageable) {
        Page<Service> searchService = serviceService.search(pageable, searchName);
        System.out.println(searchService);
       if (searchService == null){
           return new ResponseEntity<>(HttpStatus.NO_CONTENT);
       }
        return new ResponseEntity<>(searchService,HttpStatus.OK);
    }
}
