package com.cloud.poc.service;

import java.nio.charset.Charset;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class StockService implements IStockService, InitializingBean  {
	
	@Value("${stock_api_url}")
	private String STOCK_API_URL;
	
	@Value("${access_key_username}")
	private String username;
	@Value("${access_key_password}")
	private String password;
	
	HttpHeaders publicApiHeader = null;
	
	final RestTemplate restTemplate = new RestTemplate();
	
	
	@Override
	public String getStockTickerDetails(String ticker) {
		HttpEntity<String> request = new HttpEntity<String>(publicApiHeader);
		ResponseEntity<String> response = restTemplate.exchange(STOCK_API_URL+ticker, HttpMethod.GET, request, String.class);
		String body = response.getBody();
		if(null == body || body.equals("")){
			return "{\"securities\":[]}";
		}else{
			return body;
		}
	}
	@Override
	public void afterPropertiesSet() throws Exception {
		
		publicApiHeader =  new HttpHeaders() {{
	         String auth = username + ":" + password;
	         byte[] encodedAuth = Base64.encodeBase64( 
	            auth.getBytes(Charset.forName("US-ASCII")) );
	         String authHeader = "Basic " + new String( encodedAuth );
	         set( "Authorization", authHeader );
	      }};
		
	}

}
