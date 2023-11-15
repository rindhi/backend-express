import { PrismaClient } from '@prisma/client';
import {
  getDepartemen,
  getDepartemenById,
  createDepartemen,
  updateDepartemen,
  deleteDepartemen,
} from './src/controllers/departemen';

const prisma = new PrismaClient();

describe('Departemen API', () => {
  let server;

  beforeAll(() => {
    server = app.listen(3000);
  });

  afterAll((done) => {
    server.close(done);
  });

  beforeEach(async () => {
    await prisma.departemen.deleteMany();
  });

  afterEach(async () => {
    await prisma.departemen.deleteMany();
  });

  describe('getDepartemen', () => {
    it('should return all departemen', async () => {
      const departemenData = [
        { nama_department: 'Departemen A' },
        { nama_department: 'Departemen B' },
      ];

      await prisma.departemen.createMany({ data: departemenData });

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await getDepartemen(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(departemenData);
    });

    it('should handle errors', async () => {
      const errorMessage = 'Internal Server Error';

      jest.spyOn(prisma.departemen, 'findMany').mockRejectedValueOnce(new Error(errorMessage));

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await getDepartemen(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ msg: errorMessage });
    });
  });

  describe('getDepartemenById', () => {
    it('should return a departemen by ID', async () => {
      const departemenData = { nama_department: 'Departemen A' };

      const createdDepartemen = await prisma.departemen.create({ data: departemenData });

      const req = { params: { id_department: createdDepartemen.id_department.toString() } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await getDepartemenById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(createdDepartemen);
    });

    it('should handle not found', async () => {
      const req = { params: { id_department: '123' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await getDepartemenById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ msg: 'Departemen not found' });
    });

    it('should handle errors', async () => {
      const errorMessage = 'Internal Server Error';

      jest.spyOn(prisma.departemen, 'findUnique').mockRejectedValueOnce(new Error(errorMessage));

      const req = { params: { id_department: '123' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await getDepartemenById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ msg: errorMessage });
    });
  });

  describe('createDepartemen', () => {
    it('should create a new departemen', async () => {
        const departemenData = { nama_department: 'Departemen A' };

        const req = {
          body: departemenData,
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
  
        await createDepartemen(req, res);
  
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(departemenData);
      });
  
      it('should handle missing data', async () => {
        const req = {
          body: {},
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
  
        await createDepartemen(req, res);
  
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({
          message: 'Anda mengirimkan data yang salah',
          data: null,
        });
      });
  
      it('should handle errors', async () => {
        const errorMessage = 'Internal Server Error';
  
        jest.spyOn(prisma.departemen, 'create').mockRejectedValueOnce(new Error(errorMessage));
  
        const departemenData = { nama_department: 'Departemen A' };
  
        const req = {
          body: departemenData,
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
  
        await createDepartemen(req, res);
  
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ msg: errorMessage });
      });
    });
  
    describe('updateDepartemen', () => {
      it('should update a departemen', async () => {
        const departemenData = { nama_department: 'Departemen A' };
  
        const createdDepartemen = await prisma.departemen.create({ data: departemenData });
  
        const updatedDepartemenData = { nama_department: 'Departemen B' };
  
        const req = {
          params: { id_department: createdDepartemen.id_department.toString() },
          body: updatedDepartemenData,
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
  
        await updateDepartemen(req, res);
  
        const updatedDepartemen = { ...createdDepartemen, ...updatedDepartemenData };
  
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
          message: 'updated success...',
          departemen: updatedDepartemen,
        });
      });
  
      it('should handle errors', async () => {
        const errorMessage = 'Internal Server Error';
  
        jest.spyOn(prisma.departemen, 'update').mockRejectedValueOnce(new Error(errorMessage));
  
        const req = {
          params: { id_department: '123' },
          body: { nama_department: 'Departemen A' },
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
  
        await updateDepartemen(req, res);
  
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ msg: errorMessage });
      });
    });
  
    describe('deleteDepartemen', () => {
      it('should delete a departemen', async () => {
        const departemenData = { nama_department: 'Departemen A' };
  
        const createdDepartemen = await prisma.departemen.create({ data: departemenData });
  
        const req = { params: { id_department: createdDepartemen.id_department.toString() } };
        const res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
  
        await deleteDepartemen(req, res);
  
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            message: 'Deleted Success... ',
            scw: null,
          });
        });
    
        it('should handle errors', async () => {
          const errorMessage = 'Internal Server Error';
    
          jest.spyOn(prisma.departemen, 'delete').mockRejectedValueOnce(new Error(errorMessage));
    
          const req = { params: { id_department: '123' } };
          const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
          };
    
          await deleteDepartemen(req, res);
    
          expect(res.status).toHaveBeenCalledWith(400);
          expect(res.json).toHaveBeenCalledWith({ msg: errorMessage });
        });
      });
    });
    
  
