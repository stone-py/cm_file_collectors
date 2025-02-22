interface IfilesBasesSetting {
    filesBases_id: string;
    config_json_data: string;
}

interface IcoverPosterData {
    name: string;
    width: number;
    height: number;
    type: string;
}

interface IfilesBasesConfig {
    leftDisplay: Array<string>;
    country: Array<string>;
    definition: Array<string>;
    tagMode: string;
    performerPhoto: boolean;
    shieldNoPerformerPhoto: boolean;
    performerShowNum: number;
    performerPreferred: Array<string>;
    pageLimit: number;
    sortMode: string;
    resourcesShowMode: string;
    detailsDramaSeriesMode: string;
    historyModule: boolean;
    hotModule: boolean;
    youLikeModule: boolean;
    historyNumber: number;
    hotNumber: number;
    youLikeNumber: number;
    youLikeWordNumber: number;
    youLikeTagClass: Array<string>;
    plugInUnit_Cup: boolean;
    plugInUnit_Cup_Text: string;
    coverPosterData: Array<IcoverPosterData>;
    coverPosterDataDefaultSelect: number;
    coverPosterHeightStatus: boolean;
    coverPosterHeightBase: number;
    playAtlasImageWidth: number;
    playAtlasMode: string;
    playComicMode: string;
}

export { IfilesBasesSetting, IfilesBasesConfig };