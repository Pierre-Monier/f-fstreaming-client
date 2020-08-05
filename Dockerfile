FROM node:latest

RUN npm install serve -g  
COPY build /app/
EXPOSE 5001 

CMD serve -s /app -l 5001 
