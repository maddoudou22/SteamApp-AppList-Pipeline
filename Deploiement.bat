
echo off

SET nom_Projet_Git=SteamApp-AppList-Pipeline
SET URL_Projet_Git=https://github.com/maddoudou22/SteamApp-AppList-Pipeline.git
SET Repertoire_Local_Projet=C:\awsLambda\nodejs\SteamApp\GitHub\SteamApp-AppList-Pipeline

cd %Repertoire_Local_Projet%

echo "Git Add ..."
git add -A

echo "Git Commit ..."
git commit -m "latest push from windows"

echo "Git Push ..."
git push %URL_Projet_Git%
