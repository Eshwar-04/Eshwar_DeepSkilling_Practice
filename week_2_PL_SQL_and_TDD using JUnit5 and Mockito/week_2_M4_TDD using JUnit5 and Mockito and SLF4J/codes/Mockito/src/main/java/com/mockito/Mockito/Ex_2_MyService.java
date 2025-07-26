package com.mockito.Mockito;

public class Ex_2_MyService {
	    private Ex_2_ExternalApi externalApi;

	    public Ex_2_MyService(Ex_2_ExternalApi api) {
	        this.externalApi = api;
	    }

	    public void fetchData() {
	        externalApi.getData("4991632 - mockito");
	    }
	}
