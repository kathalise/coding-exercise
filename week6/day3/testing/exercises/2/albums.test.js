const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    spotify.search.mockResolvedValue({
        albums: {
            items: [
                { name: "meat loaf" },
                // { name: "Abbey Road" },
                // { name: "Mezzanine" },
            ],
        },
    });
    return getAlbumNames("meat loaf").then((albumNames) => {
        expect(albumNames).toEqual(albumNames.sort());
    });
});
