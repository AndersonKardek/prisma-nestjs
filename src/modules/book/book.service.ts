import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { BookDTO } from './book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async create(data: BookDTO) {
    const bookExists = await this.prisma.books.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });

    if (bookExists) {
      throw new Error('O livro já existe');
    } else {
      const book = await this.prisma.books.create({
        data,
      });

      return book;
    }
  }
  async findAll() {
    return this.prisma.books.findMany();
  }

  async update(id: string, data: BookDTO) {
    const bookExists = await this.prisma.books.findUnique({
      where: {
        id,
      },
    });
    if (!bookExists) {
      throw new Error('O livro n existe');
    } else {
      return await this.prisma.books.update({
        data,
        where: {
          id,
        },
      });
    }
  }

  async delete(id: string) {
    const bookExists = await this.prisma.books.findUnique({
      where: {
        id,
      },
    });
    if (!bookExists) {
      throw new Error('O livro n existe');
    } else {
      return await this.prisma.books.delete({
        where: {
          id,
        },
      });
    }
  }
}
