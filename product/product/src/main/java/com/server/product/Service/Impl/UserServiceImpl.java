package com.server.product.Service.Impl;

import com.server.product.Model.DTO.LoginDTO;
import com.server.product.Model.DTO.UserDTO;
import com.server.product.Model.Entity.User;
import com.server.product.Repository.UserRepo;
import com.server.product.Response.LoginResponse;
import com.server.product.Service.UserService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserDTO userDTO) throws JSONException {
        User user = new User(
                userDTO.getUserId(),
                userDTO.getUserName(),
                userDTO.getUserEmail(),
                userDTO.getUserPassword()
        );
        user.setUserPassword(this.passwordEncoder.encode(userDTO.getUserPassword()));
        userRepo.save(user);
        JSONObject jsonResponse = new JSONObject();
        jsonResponse.put("userName", user.getUserName());
        return jsonResponse.toString();
    }


    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) throws JSONException {
        String loginMessage = "";
        Boolean statusCode = false;
        String userName = null;

        User user = userRepo.findByEmail(loginDTO.getUserEmail());

        if (user != null) {
            // Use the password encoder to match passwords securely
            if (passwordEncoder.matches(loginDTO.getUserPassword(), user.getUserPassword())) {
                statusCode = true;
                userName = user.getUserName();
                loginMessage = "Login is successful!";
            } else {
                loginMessage = "Password is incorrect, try again!";
            }
        } else {
            loginMessage = "Email doesn't exist!";
        }

        return new LoginResponse(loginMessage, statusCode, userName);
    }


    @Override
    public User getUserById(String userId) {
        return userRepo.findById(Integer.valueOf(userId)).orElse(null);
    }

    @Override
    public void saveUser(User user) {
        userRepo.save(user);
    }

    @Override
    public void logout() {
        // Clear the authentication when logging out
        SecurityContextHolder.getContext().setAuthentication(null);
    }

    @Override
    public List<User> findAllUsers(){
        return userRepo.findAll();
    }
}

