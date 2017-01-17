init() {
    localStorage.clear();
    registerEvent();
}

registerEvent() {
    addEventListener;
    document(click) - hideSearchBoxAssistItems;
    searchBox(click) - showRecentSearchHistory;
    searchBox(keyup) - startInputText;
    clearButton(click) - clearQueryEvt;
    searchButton(click) - sendSearchResult;
    recentList(click) - selectWord;
    autoList(click) - selectWord;
};
hideSearchBoxAssistItems(hidelist(recent), hidelist(auto));
showRecentSearchHistory(
    if(data) showList(recnet), retrieveRecentSearchItems();
)
startInputText(hideList(recent), changeClearQueryBtn(), loadAutoCompleteItems())
clearQueryEvt
sendSearchResult
selectWord
selectWord

showList();
hideList();
changeClearQueryBtn();

loadAutoCompleteItems(
    if(word=="") clearQueryEvt();
    else if(localStorage)
        renderList(); showList(auto);
    else ajax();
)
