package com.godswork.project.mgnt.tool.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
@EnableWebSecurity
public class HttpSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/h2-console/**").permitAll()
                .antMatchers("/api/v1/**").permitAll().anyRequest().authenticated()
                .and().csrf().ignoringAntMatchers("/h2-console/**")
                .ignoringAntMatchers("/api/v1/**")
                .and().headers().frameOptions().sameOrigin();
    }
}
