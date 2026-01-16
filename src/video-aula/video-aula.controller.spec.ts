import { Test, TestingModule } from '@nestjs/testing';
import { VideoAulaController } from './video-aula.controller';
import { VideoAulaService } from './video-aula.service';

describe('VideoAulaController', () => {
  let controller: VideoAulaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoAulaController],
      providers: [VideoAulaService],
    }).compile();

    controller = module.get<VideoAulaController>(VideoAulaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
