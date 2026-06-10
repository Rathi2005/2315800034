import dotenv from "dotenv";
import path from "path";

import { getDepots, getVehicles } from "./api.js";
import { calculateMaxImpact } from "./scheduler.js";
import { Log } from "../logging_middleware/logger.js";

dotenv.config();

const main = async () => {
  try {
    await Log(
      "backend",
      "info",
      "service",
      "Vehicle Maintenance Scheduler Started",
    );

    const depots = await getDepots();
    const vehicles = await getVehicles();

    for (const depot of depots) {
      await Log("backend", "info", "service", `Processing Depot ${depot.ID}`);

      const maxImpact = calculateMaxImpact(vehicles, depot.MechanicHours);

      await Log("backend", "info", "service", `Depot ${depot.ID} - Hours: ${depot.MechanicHours} - Max Impact: ${maxImpact}`);
    }

    await Log(
      "backend",
      "info",
      "service",
      "Vehicle Maintenance Scheduler Completed",
    );
  } catch (error) {
    await Log("backend", "error", "service", error.message);

    console.error(error.response?.data || error.message);
  }
};

main();
