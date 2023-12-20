package com.systex.ibt.vo;


public class JsonResponse {
    private int processCode;
    private String message;
    private Object data;

    public int getProcessCode() {
        return processCode;
    }

    public void setProcessCode(int processCode) {
        this.processCode = processCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
