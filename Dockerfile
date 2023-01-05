FROM node:16
WORKDIR /case/covidmap
COPY react-redux-redux-saga-map /case/covidmap
RUN npm install
CMD npm run start 
EXPOSE 3000 