package com.example.demo.controller.service;

import com.example.demo.controller.ServiceController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;


import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class ServiceRestController_deleteService {
    @Autowired
    private ServiceController serviceController;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void deleteService_25() throws Exception {
        mockMvc.perform(
                MockMvcRequestBuilders
                        .delete("/service/delete/{id}", "null"))
                .andExpect(status().is4xxClientError());
    }

    @Test
    public void deleteService_26() throws Exception {

        mockMvc.perform(
                MockMvcRequestBuilders
                        .delete("/service/delete/{id}", " "))
                .andExpect(status().is4xxClientError());
    }

    @Test
    public void deleteService_27() throws Exception {

        mockMvc.perform(
                MockMvcRequestBuilders
                        .delete("/service/delete/{id}", "DV0001"))
                .andExpect(status().is4xxClientError());
    }

    @Test
    public void deleteService_28() throws Exception {

        mockMvc.perform(
                MockMvcRequestBuilders
                        .delete("/service/delete/{id}", "SV0001"))
                .andExpect(status().is2xxSuccessful());
    }
}
