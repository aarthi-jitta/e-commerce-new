package com.server.product.Controller;

import com.server.product.Model.DTO.LoginDTO;
import com.server.product.Model.DTO.UserDTO;
import com.server.product.Response.LoginResponse;
import com.server.product.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.json.JSONException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/kbeauty/user")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping(path = "/register")
    public String registerUser(@RequestBody UserDTO userDTO) throws JSONException {
        String id = userService.addUser(userDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO) throws JSONException {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping(path = "/logout")
    public ResponseEntity<?> logoutUser() {
        userService.logout();
        return ResponseEntity.ok("Logout successful");
    }
}
