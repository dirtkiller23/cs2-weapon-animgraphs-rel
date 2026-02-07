import { Instance, BaseModelEntity } from "cs_script/point_script";

// Team constants
const TEAM_TERRORIST = 2;
const TEAM_COUNTER_TERRORIST = 3;

// Model paths (replace with your actual model paths)
const T_MODEL = "characters/models/tm_phoenix_custom/tm_phoenix_custom.vmdl";
const CT_MODEL = "characters/models/ctm_sas_custom/ctm_sas_custom.vmdl";

Instance.OnScriptInput("ChangePlayerModel", () => {
    // Find all players
    const players = Instance.FindEntitiesByClass("player");
    
    let modelsChanged = 0;
    
    for (const player of players) {
        if (player instanceof BaseModelEntity) {
            const team = player.GetTeamNumber();
            
            if (team === TEAM_TERRORIST) {
                player.SetModel(T_MODEL);
                modelsChanged++;
            } else if (team === TEAM_COUNTER_TERRORIST) {
                player.SetModel(CT_MODEL);
                modelsChanged++;
            }
        }
    }
    
    Instance.Msg(`Changed models for ${modelsChanged} players!`);
});