package com.example.demo.controller.service;

import com.example.demo.controller.ServiceController;
import com.example.demo.entity.Service;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class ServiceRestController_searchService {

    @Autowired
    private ServiceController serviceController;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void searchService_7() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/service/search", "null"))
                .andExpect(status().is4xxClientError());
    }

    @Test
    public void searchService_8() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/service/search", " "))
                .andExpect(status().is4xxClientError());
    }

    @Test
    public void searchService_9() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders.get("/service/search", "Nguyen Van A"))
                .andExpect(status().is4xxClientError());
    }

    @Test
    public void searchService_10() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders
                        .get("/service/search")
                        .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().is4xxClientError());
    }

    @Test
    public void searchService_11() {
        ResponseEntity<Page<Service>> responseEntity
                = this.serviceController.searchService("SV001",PageRequest.of(0,2));

        Assertions.assertEquals(200, responseEntity.getStatusCodeValue());
        Assertions.assertEquals(1, responseEntity.getBody().getTotalPages());
        Assertions.assertEquals(1, responseEntity.getBody().getTotalElements());
    }
}
