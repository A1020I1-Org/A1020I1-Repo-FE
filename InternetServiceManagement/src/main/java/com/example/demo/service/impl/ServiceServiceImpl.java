package com.example.demo.service.impl;

import com.example.demo.repository.ServiceRepository;
import com.example.demo.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class ServiceServiceImpl implements ServiceService {
    @Autowired
    ServiceRepository serviceRepository;
    @Override
    public Page<com.example.demo.entity.Service> findAllService(Pageable pageable) {
        return serviceRepository.findAll(pageable);
    }

    @Override
    public com.example.demo.entity.Service findServiceById(String serviceId) {
        return serviceRepository.findById(serviceId).orElse(null);
    }

    @Override
    public void deleteService(String serviceId) {
        serviceRepository.deleteById(serviceId);
    }

    @Override
    public Page<com.example.demo.entity.Service> search(Pageable pageable, String searchName) {
        return serviceRepository.search(pageable,searchName);
    }
}
