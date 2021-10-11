package com.example.demo.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "order_service_total")
public class OrderServiceToTal {
    @Id
    private Integer id;

    private int serviceTotalMoney;

    private String dateOrderService;

    @OneToMany(mappedBy = "orderServiceToTal", cascade = CascadeType.ALL)
    Set<OrderService> orderServices;

    @OneToOne(mappedBy = "orderServiceToTal", cascade = CascadeType.ALL)
    private Pay pay;

    public OrderServiceToTal() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getServiceTotalMoney() {
        return serviceTotalMoney;
    }

    public void setServiceTotalMoney(int serviceTotalMoney) {
        this.serviceTotalMoney = serviceTotalMoney;
    }

    public Set<OrderService> getOrderServices() {
        return orderServices;
    }

    public void setOrderServices(Set<OrderService> orderServices) {
        this.orderServices = orderServices;
    }

    public Pay getPay() {
        return pay;
    }

    public void setPay(Pay pay) {
        this.pay = pay;
    }

    public String getDateOrderService() {
        return dateOrderService;
    }

    public void setDateOrderService(String dateOrderService) {
        this.dateOrderService = dateOrderService;
    }
}
