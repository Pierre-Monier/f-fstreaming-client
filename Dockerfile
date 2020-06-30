FROM node:latest

RUN npm install serve -g  
COPY build /app/
EXPOSE 5000 

CMD serve -s /app -l 36073 
