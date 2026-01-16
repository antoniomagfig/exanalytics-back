import { Test, TestingModule } from '@nestjs/testing';
import { VideoAulaService } from './video-aula.service';

describe('VideoAulaService', () => {
  let service: VideoAulaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoAulaService],
    }).compile();

    service = module.get<VideoAulaService>(VideoAulaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
