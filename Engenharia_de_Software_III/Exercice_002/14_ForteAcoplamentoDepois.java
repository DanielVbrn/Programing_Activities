package dev.camila;

import java.time.LocalDate;

public class Assessment {
    private Long id;
    private Enrollment enrollment;
    private String personalName;
    private LocalDate assessmentDate = LocalDate.now();
    private Double weight;
    private Double height;
    private String status;
    private Double imc;

    public Assessment(Long id, Enrollment enrollment, String personalName, Double weight, Double height) {
        this.id = id;
        this.enrollment = enrollment;
        this.personalName = personalName;
        this.weight = weight;
        this.height = height;
        this.imc = ImcCalculator.calculateImc(weight, height);
        this.status = getStatus();
        this.enrollment.addAssessment(this);
    }

    private String getStatus() {
        if (this.imc < 18.5) {
            return Status.UNDER_WEIGHT;
        } else if (this.imc >= 18.5 && this.imc <= 24.9) {
            return Status.NORMAL_WEIGHT;
        } else {
            return Status.OVERWEIGHT;
        }
    }

    public enum Status {
        UNDER_WEIGHT,
        NORMAL_WEIGHT,
        OVERWEIGHT
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Enrollment getEnrollment() {
        return enrollment;
    }

    public void setEnrollment(Enrollment enrollment) {
        this.enrollment = enrollment;
    }

    public String getPersonalName() {
        return personalName;
    }

    public void setPersonalName(String personalName) {
        this.personalName = personalName;
    }

    public LocalDate getAssessmentDate() {
        return assessmentDate;
    }

    public void setAssessmentDate(LocalDate assessmentDate) {
        this.assessmentDate = assessmentDate;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Double getImc() {
        return imc;
    }

    public void setImc(Double imc) {
        this.imc = imc;
    }
}


package dev.camila;

public class ImcCalculator {
    public static Double calculateImc(Double weight, Double height) {
        // IMC = peso / (altura * altura)
        return weight / (height * height);
    }
}
