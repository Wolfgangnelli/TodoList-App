# Questo file contiene le istruzioni per costruire l'immagine Docker del mio progetto
# Immagine ufficiale di Node.js come base
FROM node:14-alpine
# Directory di lavoro all'interno del container
WORKDIR /app
# Copia file package.json e package-lock.json nella directory di lavoro
COPY package*.json ./
#Installa le dipendenze di progetto
RUN npm install
# Copia resto dei file del progetto nella directory di lavoro
COPY . .
# Esponi la porta 3000 del container
EXPOSE 3000
# Avvia l'app
CMD [ "npm", "start" ]