# Reverse Proxy 

### Docker Install and Setup ###
- Install Docker Destop for [Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows) or [Apple](https://hub.docker.com/editions/community/docker-ce-desktop-mac)
- Run Docker Desktop on your machine
- Open docker settings 
    - Windows right-click the tray icon
    - Mac click on the docker icon in the Menu Bar at the top of the screen
- Under shared drives, select the drive where the codebase will be

### Run Commands on a Running Container ###

If you edit a `server.js` file in app1/src for example, you'll need to tell the Node process in that container to stop and re-run the `npm start` command.

Run the following commands to restart a Node App in an already running containers.
```
docker exec -it app-one /bin/sh
```

This should get you inside the container.  Once you're there run the following
```
cd /app
npm start
```

If you get an error that a container by the name of `app-on` doesn't exist, run this command to list all the containers.
```
docker ps -a
```
This command lists all the containers, it may have a weird name like `reverse-proxy_app-one`


