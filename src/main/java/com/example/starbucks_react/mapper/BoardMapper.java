package com.example.starbucks_react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.starbucks_react.dto.BoardDto;

@Mapper
public interface BoardMapper {
    
    List<BoardDto> findAll();

    BoardDto findById(int id);

    void insert(BoardDto board);

    void update(BoardDto board);

    void delete(int id);
}
