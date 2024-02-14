package com.example.demo.config;

// import static com.example.demo.utils.MyConstant.SWAGGER_SCHEME;
import static com.example.demo.utils.MyConstant.SWAGGER_SECURITY_SCHEME_NAME;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.demo.utils.MyConstant;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.security.SecurityScheme.Type;
import io.swagger.v3.oas.models.servers.Server;

@Configuration
public class SwaggerApiConfig {
    @Bean
    public OpenAPI openApi(){
        return new OpenAPI()
            .servers(List.of(new Server().url(MyConstant.SWAGGER_LOCALHOST_URL)))
            .addSecurityItem(new SecurityRequirement()
                      .addList(SWAGGER_SECURITY_SCHEME_NAME))
            .components(new Components()
                  .addSecuritySchemes(SWAGGER_SECURITY_SCHEME_NAME,
                        new SecurityScheme().name(MyConstant.SWAGGER_SECURITY_SCHEME_NAME)
                      .type(Type.HTTP)
                      .scheme(MyConstant.SWAGGER_SCHEME)
                      .description(MyConstant.SWAGGER_DESCRIPTION)
                      .bearerFormat(MyConstant.SWAGGER_BEARER_FORMAT)));

         
        

       
}
}
