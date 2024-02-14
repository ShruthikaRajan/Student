package com.example.demo.config;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.demo.utils.JwtUtil;

import io.micrometer.common.lang.NonNull;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationConfig  extends OncePerRequestFilter{
    private final UserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;
    @Override
    protected void doFilterInternal(
        @NonNull HttpServletRequest request, 
        @NonNull HttpServletResponse response, 
        @NonNull FilterChain filterChain)
            throws ServletException, IOException {
            final String authHeader = request.getHeader(AUTHORIZATION);
            final String token;
            final String userName;
            if(authHeader == null || !authHeader.startsWith("Bearer ")){
                filterChain.doFilter(request,response);
                return;
            }
            token=authHeader.substring(7);
            userName = jwtUtil.extractUsername(token);
            if(userName!=null && SecurityContextHolder.getContext().getAuthentication()==null){
            UserDetails userDetails= this.userDetailsService.loadUserByUsername(userName);
            if(jwtUtil.isTokenValid(token,userDetails))
            {
                UsernamePasswordAuthenticationToken authToken=new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
            filterChain.doFilter(request, response);
         }
        
    }

}
