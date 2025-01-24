package com.youcode.pigeonskyracev2.service.Impl;
import com.youcode.pigeonskyracev2.dto.competition.CompetitionRequestDTO;
import com.youcode.pigeonskyracev2.dto.competition.CompetitionResponseDTO;
import com.youcode.pigeonskyracev2.entity.Competition;
import com.youcode.pigeonskyracev2.entity.User;
import com.youcode.pigeonskyracev2.mapper.CompetitionMapper;
import com.youcode.pigeonskyracev2.repository.CompetionRepository;
import com.youcode.pigeonskyracev2.service.CompetitionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
public class CompetitionServiceImpl implements CompetitionService {

    private final CompetionRepository competitionRepository;
    private final CompetitionMapper competitionMapper;

    public CompetitionServiceImpl(CompetionRepository competitionRepository, CompetitionMapper competitionMapper) {
        this.competitionRepository = competitionRepository;
        this.competitionMapper = competitionMapper;
    }
    @Override
    public CompetitionResponseDTO createCompetition(CompetitionRequestDTO competitionRequestDTO) {
        Competition competition = competitionMapper.toEntity(competitionRequestDTO);
        competition = competitionRepository.save(competition);
        return competitionMapper.toResponse(competition);
    }



}
