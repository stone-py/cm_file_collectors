import { CoreDb } from "@/core/core";
import { IConditions } from "@/core/coreDBS";
import { IresTags, IresTagsInfo } from "@/dataInterface/resources.interface";
const resourcesTagsServerData = {
    getDataListByResources_id: async function (resources_id: string) {
        return await CoreDb().table('resourcesTags').fields(['t.*', 'tag.tagClass_id']).leftJoin('tag', 't.tag_id = tag.id').where('resources_id', '=', resources_id).getList() as Array<IresTagsInfo>;
    },
    setResourcesTags: async function (resources_id: string, tagsArr: Array<IresTags>) {
        const tID = await CoreDb().beginTrans();
        const delStatus = await this.deleteTagsByResourcesId(resources_id);
        if (!delStatus) {
            await CoreDb().rollback();
            return false;
        }
        for (let i = 0; i < tagsArr.length; i++) {
            const addStatus = await this.addTags(tagsArr[i]);
            if (!addStatus) {
                await CoreDb().rollback();
                return false;
            }
        }
        await CoreDb().commit(tID);
        return true;
    },
    addTags: async function (obj: IresTags) {
        const addResult = await CoreDb().table('resourcesTags').create(obj as unknown as IConditions);
        return (addResult && addResult.status == true)
    },
    deleteTagsByResourcesId: async function (resources_id: string) {
        const delResult = await CoreDb().table('resourcesTags').where('resources_id', '=', resources_id).deleteWhere();
        return (delResult && delResult.status == true) ? true : false;
    },
}
export { resourcesTagsServerData }