
echo "================================== shutting down database ==================";
docker compose -f src/docker-compose-db.yml down || return;
echo "================================== done shutting down database ==================";

echo "================================== shutting down api ==================";
docker compose -f src/docker-compose-backend.yml down  || return;
echo "================================== done shutting down api ==================";