package com.example.demo.service;

import com.example.demo.entity.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@org.springframework.stereotype.Service
public interface ServiceService {

    Page<Service> findAllService(Pageable pageable);

    Service findServiceById(String serviceId);

    void deleteService (String serviceId);

    Page<Service> search(Pageable pageable, String searchName);
}

