package com.example.demo.entity;

import javax.persistence.*;

@Entity
@Table(name = "order_service")
public class OrderService {

    @Id
    private Integer id;

    @ManyToOne
    @MapsId("customerId")
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private Service service;

    @ManyToOne
    @JoinColumn(name = "order_service_total_id")
    private OrderServiceToTal orderServiceToTal;

    private int quantity;
    private int unit;
    private int totalMoney;
    private String oder_date;

    public OrderService() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getUnit() {
        return unit;
    }

    public void setUnit(int unit) {
        this.unit = unit;
    }

    public int getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(int totalMoney) {
        this.totalMoney = totalMoney;
    }

    public String getOder_date() {
        return oder_date;
    }

    public void setOder_date(String oder_date) {
        this.oder_date = oder_date;
    }

    public OrderServiceToTal getOrderServiceToTal() {
        return orderServiceToTal;
    }

    public void setOrderServiceToTal(OrderServiceToTal orderServiceToTal) {
        this.orderServiceToTal = orderServiceToTal;
    }
}
