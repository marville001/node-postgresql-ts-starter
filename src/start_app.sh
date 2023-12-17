echo "================================== starting database ==================";
docker compose -f docker-compose-db.yml up -d  || return;
echo "================================== done starting database ==================";

echo "================================== building api ==================";
docker compose -f docker-compose-backend.yml build  || return;
echo "================================== done building api ==================";

echo "================================== starting api ==================";
docker compose -f docker-compose-backend.yml up  || return;
echo "================================== done starting api ==================";