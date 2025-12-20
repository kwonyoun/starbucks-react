package com.example.starbucks_react.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.starbucks_react.dto.BoardDto;
import com.example.starbucks_react.service.BoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/boards")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class BoardController {

    private final BoardService boardService;

    
    @GetMapping
    public List<BoardDto> list() {
        return boardService.findAll();
    }

    @GetMapping("/{id}")
    public BoardDto detail(@PathVariable int id) {
        return boardService.findById(id);
    }

    @PostMapping
    public void write(@RequestBody BoardDto board) {
        boardService.insert(board);
    }

    @PostMapping("/edit")
    public void update(@RequestBody BoardDto board) {
        boardService.update(board);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        boardService.delete(id);
    }
    
}
