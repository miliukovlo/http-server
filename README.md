1. Для запуска сервера прописать npm run start

2. Сервер будет запускать по адресу - http://localhost:5007 (также это будет уточняться в console.log в консоли)

3. Все получения данных будут происходить по адресу http://localhost:5007/api

4. Для получения данных на страницу dashboard используем следующий маршрут: http://localhost:5007/api/students

4.1 По адресу http://localhost:5007/api/students и методу GET будет происходить получение данных 20 пользователей

4.2 По адресу http://localhost:5007/api/students/:id и методу PUT будет происходить обновление данных конкретного пользователя, а именно будет изменяться свойство isHere

5. http://localhost:5007/api/account - использовать на странице входа. 
Имеется всего 2 аккаунта.
Параметры передавать в теле запроса 
 1 для преподавателя, 2 для администратора. 
 Для преподавателя email - teacher@mail.ru, password - password 
 для администратора email - admin@mail.ru, password - password

6.  http://localhost:5007/api/generate - использовать на странице пользователей. 3 маршрута, везде запрос GET
http://localhost:5007/api/generate - получение списка всех студентов (63)
http://localhost:5007/api/generate/limit/:limit - получение списка студентов определенного количества
http://localhost:5007/api/generate/current/:id - получение данных определенного студента

 


