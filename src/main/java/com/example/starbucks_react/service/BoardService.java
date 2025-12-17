package com.example.starbucks_react.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.starbucks_react.dto.BoardDto;
import com.example.starbucks_react.mapper.BoardMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardService {
    
    private final BoardMapper boardMapper;

    public List<BoardDto> findAll() {
        return boardMapper.findAll();
    }

    public BoardDto findById(int id) {
        return boardMapper.findById(id);
    }

    public void insert(BoardDto board) {
        boardMapper.insert(board);
    }

}
