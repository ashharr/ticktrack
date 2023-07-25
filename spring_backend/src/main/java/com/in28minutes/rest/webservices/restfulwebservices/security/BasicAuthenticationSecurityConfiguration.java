package com.in28minutes.rest.webservices.restfulwebservices.security;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

//@Configuration
public class BasicAuthenticationSecurityConfiguration {
	
	//Filter chain
    // authenticate all requests
    //basic authentication
    //disabling csrf
    //stateless rest api
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.headers().frameOptions().disable();
		return http
				.requestMatchers()
//				.antMatchers(HttpMethod.OPTIONS,"/**")
				.and()
				.authorizeHttpRequests(auth -> auth
			              .antMatchers(HttpMethod.OPTIONS, "/**").permitAll() //NEW
			              .anyRequest().authenticated())
				.httpBasic(Customizer.withDefaults())
				.sessionManagement( session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.csrf().disable()
				.build();
		
	}
}
