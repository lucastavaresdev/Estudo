export function selectTab(tabId) {
    console.log(tabID)
    return {
        type: 'TAB_SELECTED',
        payload: tabID
    }
}