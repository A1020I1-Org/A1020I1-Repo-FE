package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.ManyToOne;


@Entity
public class Pay {
    @Id
    private int payId;
    private double totalPayment;
    private boolean status;

    @OneToOne
    @JoinColumn(name = "order_service_total_id")
    private OrderServiceToTal orderServiceToTal;

    @OneToOne
    @JoinColumn(name = "order_id")
    private Order order;

    public Pay() {
    }

    public int getPayId() {
        return payId;
    }

    public void setPayId(int payId) {
        this.payId = payId;
    }

    public double getTotalPayment() {
        return totalPayment;
    }

    public void setTotalPayment(double totalPayment) {
        this.totalPayment = totalPayment;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

}
