import { createSelector } from "reselect";
import directoryComponents from "../../components/directory/directory.components";

const selectDirectory = state => state.directory;

export const selectDirectoryItems = createSelector(
    [selectDirectory],
    directory => directory.sections
)