import fs from 'fs';
import path from 'path';
// Функция для поиска файлов
function searchFiles(directory: string, searchTerm: string, searchContent: boolean = false): void {
  fs.readdir(directory, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`Ошибка чтения директории: ${err.message}`);
      return;
    }
    files.forEach(file => {
      const filePath = path.join(directory, file.name);
      if (file.isDirectory()) {
        searchFiles(filePath, searchTerm, searchContent);
      } else if (file.isFile()) {
        if (file.name.includes(searchTerm)) {
          console.log(`Найден файл: ${filePath}`);
        }
        if (searchContent && file.name.endsWith('.txt')) {
          fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
              console.error(`Ошибка чтения файла ${filePath}: ${err.message}`);
              return;
            }
            if (data.includes(searchTerm)) {
              console.log(`Найден файл с содержимым: ${filePath}`);
            }
          });
        }
      }
    });
  });
}
// Основная функция
function main() {
  const directory = './'; 
  const searchTerm = 'search'; 
  const searchContent = true; 

  searchFiles(directory, searchTerm, searchContent); 
}
main();
