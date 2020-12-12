package com.seerviashish;

public class Response<T> {
    public ResponseStatus status;
    public T data;
    public String error;

    public Response(ResponseStatus status, T data, String error) {
        this.status = status;
        this.data = data;
        this.error = error;
    }

    public Response(ResponseStatus status, T data) {
        this.status = status;
        this.data = data;
    }

    public Response(ResponseStatus status, String error) {
        this.status = status;
        this.error = error;
    }
}
