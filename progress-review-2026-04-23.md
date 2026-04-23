# dokal5.github.io 進度盤點（2026-04-23）

## 1) 網站目前進度（內容與結構）

### A. 整體資訊架構已成形
- 站點目前有四個主入口：Home、Thoughts、Courses、Case Library。
- Home 以「知識花園」方式做總覽，並把文章、課程、案例庫連在同一條學習路徑上。

### B. 內容模組已具備初步規模
- Thoughts：2 篇文章（策略思考與教學筆記）。
- Courses：2 個課程分類（Marketing 與 Effective Value Capturing），首頁宣告 15 個教學頁。
- Case Library：已上線 Pricing Cases 子庫，且資料層已包含 3 個案例（Basecamp/Figma/Webflow）。

### C. 技術實作狀態
- Pricing Cases 採「資料檔（case-library.js）+ 列表頁動態渲染」模式，已能按 reviewed_at 排序並輸出卡片。
- 案例模板與欄位規格（CASE_SCHEMA / CASE_TEMPLATE）已存在，代表後續擴充流程可複製。

### D. 目前可優先修正的小落差
- Home 與 Case Library 摘要數字仍顯示 2 個 pricing cases，但 `case-library.js` 實際已有 3 筆。
- Home 的「Latest additions」文案仍停在 Basecamp/Figma，未反映 2026-04-22 新增 Webflow。

---

## 2) 最近 branch / 開發節奏介紹

目前本地工作分支為 `work`，近幾次變更集中在 **2026-04-22**，主題非常一致：

1. 建立 pricing case library foundation（PR #18）。
2. 將案例頁對齊模板規格（PR #19）。
3. 新增 Webflow 案例並做一致性修正（PR #20）。

### 從 commit 訊號看出的方向
- 發展脈絡清楚：先打基礎（library + schema），再標準化（template normalization），最後擴內容（新增案例）。
- 這表示專案已從「頁面堆疊階段」進入「可規模化產出內容」的階段。

---

## 3) 下一步建議發展計劃（建議 3 週）

## 第 1 週：資料一致性與營運訊號可視化
1. 修正所有摘要計數與最新案例文案（避免內容信任落差）。
2. 在 Home 增加「最近更新日期」與「最近 3 次更新項目」。
3. 在 Pricing Cases 列表增加基礎篩選（mechanism_type / industry）。

**目標**：先把「看起來像一個活站」的更新感建立起來。

## 第 2 週：內容生產效率化
1. 將新案例建立流程文件化（從 CASE_TEMPLATE 到上線 checklist）。
2. 新增 2–3 個 pricing cases，優先補足不同定價邏輯（如 usage-based、bundle、hybrid）。
3. 統一案例頁 CTA（例如：回到案例庫 / 回到課程對應章節）。

**目標**：從單次產出轉向可持續的案例「節奏」。

## 第 3 週：學習路徑整合（課程 × 案例）
1. 在每個課程頁補「對應案例」區塊（例如 EVAC 章節對應 1~2 個案例）。
2. 在案例頁補「建議先讀課程」與「延伸思考題」。
3. 為 Thoughts/Courses/Cases 建立共同 tag 語彙，讓跨區導覽可運作。

**目標**：把網站從內容倉庫升級成「可引導的決策學習系統」。

---

## 4) 優先級（若只能先做三件事）
1. **修正首頁與案例庫統計數字/最新案例文案。**
2. **建立案例新增 SOP（模板、欄位、檢查清單）。**
3. **打通課程頁與案例頁的雙向連結。**

這三件事會同時改善：可信度、擴充速度、以及使用者留存路徑。
