(() => {
  const STORAGE_KEY = "devops-ai-bootcamp-progress-v1";
  const $ = (id) => document.getElementById(id);
  const days = window.BOOTCAMP_DAYS || [];
  const defaultState = () => ({
    days: Object.fromEntries(days.map(d => [d.day, {
      status: "not-started", hours: 0, quiz: "", notes: "", labChecks: [], deliverableChecks: []
    }])),
    capstoneChecks: [], capstoneNotes: ""
  });
  let state = loadState();
  let selectedDay = null;

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!saved || !saved.days) return defaultState();
      const base = defaultState();
      for (const d of days) base.days[d.day] = { ...base.days[d.day], ...(saved.days[d.day] || {}) };
      base.capstoneChecks = Array.isArray(saved.capstoneChecks) ? saved.capstoneChecks : [];
      base.capstoneNotes = saved.capstoneNotes || "";
      return base;
    } catch { return defaultState(); }
  }
  function persist() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); renderAll(); }
  function record(n) { return state.days[n] || (state.days[n] = defaultState().days[n]); }
  function completed() { return days.filter(d => record(d.day).status === "completed").length; }
  function totalHours() { return days.reduce((sum,d) => sum + (Number(record(d.day).hours) || 0), 0); }
  function firstIncomplete() { return days.find(d => record(d.day).status !== "completed") || days[days.length - 1]; }
  function weekRange(w) { return days.filter(d => d.week === w); }
  function weekDone(w) { return weekRange(w).filter(d => record(d.day).status === "completed").length; }
  function escapeHtml(s) { return String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
  function statusLabel(s) { return s === "completed" ? "Completed" : s === "in-progress" ? "In progress" : "Not started"; }

  function navigate(view) {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    document.querySelectorAll(".nav-link").forEach(a => a.classList.toggle("active", a.dataset.view === view));
    $(`${view}View`).classList.add("active");
    $("pageTitle").textContent = ({overview:"Overview",roadmap:"Daily roadmap",milestones:"Weekly milestones",capstone:"Capstone project"})[view];
    if (location.hash !== `#${view}`) history.replaceState(null, "", `#${view}`);
  }
  document.querySelectorAll("[data-view]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); navigate(a.dataset.view); }));
  document.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => navigate(b.dataset.go)));
  $("todayLabel").textContent = new Intl.DateTimeFormat(undefined,{weekday:"short",month:"short",day:"numeric",year:"numeric"}).format(new Date());
  $("continueBtn").addEventListener("click", () => openDay(firstIncomplete().day));

  function renderOverview() {
    const done = completed(), hours = totalHours(), inProgress = days.filter(d => record(d.day).status === "in-progress").length;
    $("progressPercent").textContent = `${Math.round(done / 30 * 100)}%`;
    $("overallBar").style.width = `${done / 30 * 100}%`;
    $("completedLabel").textContent = `${done} of 30 days completed`;
    $("hoursValue").textContent = hours.toFixed(1).replace(/\.0$/,"");
    $("hoursBar").style.width = `${Math.min(100, hours / 120 * 100)}%`;
    $("streakValue").textContent = done ? Math.min(done, days.filter(d => record(d.day).status === "completed").length) : 0;
    $("inProgressValue").textContent = inProgress;
    $("notStartedLabel").textContent = `${30 - done - inProgress} days not started`;
    $("weekCards").innerHTML = [1,2,3,4].map(w => {
      const list = weekRange(w), pct = Math.round(weekDone(w) / list.length * 100);
      return `<div class="week-card" data-week="${w}"><div class="week-card-top"><span class="week-number">WEEK 0${w}</span><span class="week-percent">${pct}%</span></div><h4>${escapeHtml(list[0].weekName)}</h4><p>Days ${list[0].day}–${list[list.length-1].day} · ${weekDone(w)}/${list.length} complete</p><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div></div>`;
    }).join("");
    document.querySelectorAll(".week-card").forEach(el => el.addEventListener("click", () => { navigate("roadmap"); $("weekFilter").value = el.dataset.week; renderRoadmap(); }));
    const next = firstIncomplete(), r = record(next.day);
    $("nextDayCard").innerHTML = `<div class="next-day"><span class="day-tag">DAY ${String(next.day).padStart(2,"0")} · ${escapeHtml(next.weekName.toUpperCase())}</span><h4>${escapeHtml(next.title)}</h4><p>${escapeHtml(next.summary)}</p><div class="next-meta"><span class="mini-tag">3–4 hours</span><span class="mini-tag">${next.objectives.length} objectives</span><span class="mini-tag">${statusLabel(r.status)}</span></div><button class="open-day" data-open="${next.day}">Open day details →</button></div>`;
    $("nextDayCard").querySelector("[data-open]").addEventListener("click", () => openDay(next.day));
    const recent = days.filter(d => record(d.day).status === "completed").slice(-4).reverse();
    $("activitySummary").textContent = recent.length ? `${done} completed day${done===1?"":"s"}` : "No completed days yet";
    $("activityList").innerHTML = recent.length ? recent.map(d => `<div class="activity-item"><span class="activity-icon">✓</span><span><b>Day ${d.day} completed</b> · ${escapeHtml(d.title)}</span></div>`).join("") : `<div class="activity-empty">Your completed lessons will appear here. Finish a day’s lab and mark it complete to build your activity history.</div>`;
  }

  function renderRoadmap() {
    const q = $("searchInput").value.toLowerCase(), w = $("weekFilter").value, s = $("statusFilter").value;
    const filtered = days.filter(d => {
      const r = record(d.day), hay = `${d.title} ${d.summary} ${d.weekName} ${d.objectives.join(" ")} ${d.labs.join(" ")}`.toLowerCase();
      return (!q || hay.includes(q)) && (w === "all" || String(d.week) === w) && (s === "all" || r.status === s);
    });
    $("roadmapCount").textContent = `${completed()} / 30 completed`;
    $("dayList").innerHTML = filtered.length ? filtered.map(d => {
      const r = record(d.day);
      return `<div class="day-row ${r.status}" data-day="${d.day}"><div class="day-num">${String(d.day).padStart(2,"0")}</div><div><h4>${escapeHtml(d.title)}</h4><p>Week ${d.week} · ${escapeHtml(d.weekName)} · ${escapeHtml(d.summary)}</p></div><span class="status-pill ${r.status}">${statusLabel(r.status)}</span><span class="row-hours">${Number(r.hours)||0}h</span></div>`;
    }).join("") : `<div class="panel activity-empty">No days match these filters.</div>`;
    document.querySelectorAll(".day-row").forEach(el => el.addEventListener("click", () => openDay(Number(el.dataset.day))));
  }
  ["searchInput","weekFilter","statusFilter"].forEach(id => $(id).addEventListener(id==="searchInput"?"input":"change", renderRoadmap));

  function renderMilestones() {
    $("milestoneCards").innerHTML = [1,2,3,4].map(w => {
      const list = weekRange(w), pct = Math.round(weekDone(w)/list.length*100);
      return `<article class="milestone-card"><div class="eyebrow">WEEK 0${w} · DAYS ${list[0].day}–${list[list.length-1].day}</div><h3>${escapeHtml(list[0].weekName)}</h3><p>${["Linux, Git, automation, networking, Docker and CI/CD.","Cloud architecture, Terraform, Kubernetes, Helm, GitOps and observability.","Python, ML basics, LLMs, prompt design, APIs, RAG and evaluation.","Design, build, containerize, deploy and monitor your AI DevOps Assistant."][w-1]}</p><div class="milestone-stats"><span>${weekDone(w)} of ${list.length} days complete</span><b>${pct}%</b></div><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div></article>`;
    }).join("");
  }

  const capstoneTasks = [
    "Architecture and API contract documented",
    "FastAPI backend implemented and tested",
    "Next.js frontend connected to backend",
    "RAG knowledge base indexed with source citations",
    "LLM output validated; uncertainty and safety behavior tested",
    "Dockerfiles and local Compose stack working",
    "GitHub Actions CI pipeline passing",
    "Kubernetes / Helm deployment working",
    "Metrics, dashboard and operational runbooks added",
    "Demo recorded, README complete and v1.0.0 released"
  ];
  function renderCapstone() {
    $("capstoneTasks").innerHTML = capstoneTasks.map((t,i) => `<label class="check-item"><input type="checkbox" data-capstone="${i}" ${state.capstoneChecks.includes(i)?"checked":""}>${escapeHtml(t)}</label>`).join("");
    $("capstoneProgress").textContent = `${state.capstoneChecks.length} / ${capstoneTasks.length}`;
    $("capstoneNotes").value = state.capstoneNotes;
    document.querySelectorAll("[data-capstone]").forEach(el => el.addEventListener("change", () => {
      const i = Number(el.dataset.capstone);
      state.capstoneChecks = el.checked ? [...new Set([...state.capstoneChecks,i])] : state.capstoneChecks.filter(x=>x!==i);
      persist();
    }));
  }
  $("capstoneNotes").addEventListener("input", () => { state.capstoneNotes = $("capstoneNotes").value; localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); });

  function openDay(n) {
    selectedDay = n;
    const d = days.find(x => x.day === n), r = record(n);
    $("modalEyebrow").textContent = `DAY ${String(n).padStart(2,"0")} · WEEK ${d.week}`;
    $("modalTitle").textContent = d.title;
    $("modalSummary").textContent = d.summary;
    $("dayStatus").value = r.status;
    $("dayHours").value = r.hours || "";
    $("dayQuiz").value = r.quiz;
    $("dayNotes").value = r.notes || "";
    $("modalObjectives").innerHTML = d.objectives.map(x=>`<li>${escapeHtml(x)}</li>`).join("");
    $("modalLabs").innerHTML = d.labs.map((x,i)=>`<label class="modal-check"><input type="checkbox" data-lab="${i}" ${r.labChecks.includes(i)?"checked":""}>${escapeHtml(x)}</label>`).join("");
    $("modalDeliverables").innerHTML = d.deliverables.map((x,i)=>`<label class="modal-check"><input type="checkbox" data-deliverable="${i}" ${r.deliverableChecks.includes(i)?"checked":""}>${escapeHtml(x)}</label>`).join("");
    $("modalCheckpoint").textContent = d.checkpoint;
    $("dayModal").classList.add("open"); $("dayModal").setAttribute("aria-hidden","false");
  }
  function closeModal() { $("dayModal").classList.remove("open"); $("dayModal").setAttribute("aria-hidden","true"); selectedDay=null; }
  $("closeModal").addEventListener("click",closeModal);
  $("dayModal").addEventListener("click",e=>{if(e.target===$("dayModal"))closeModal();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
  $("saveDayBtn").addEventListener("click", () => {
    if (!selectedDay) return;
    const r = record(selectedDay);
    r.status = $("dayStatus").value;
    r.hours = Math.max(0,Math.min(24,Number($("dayHours").value)||0));
    const quiz = $("dayQuiz").value;
    r.quiz = quiz === "" ? "" : Math.max(0,Math.min(10,Math.round(Number(quiz))));
    r.notes = $("dayNotes").value;
    r.labChecks = [...document.querySelectorAll("[data-lab]:checked")].map(el=>Number(el.dataset.lab));
    r.deliverableChecks = [...document.querySelectorAll("[data-deliverable]:checked")].map(el=>Number(el.dataset.deliverable));
    persist(); closeModal();
  });

  $("exportBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),progress:state},null,2)],{type:"application/json"});
    const url = URL.createObjectURL(blob), a = document.createElement("a");
    a.href=url; a.download="devops-ai-bootcamp-progress.json"; a.click(); URL.revokeObjectURL(url);
  });
  $("importInput").addEventListener("change", async e => {
    const file=e.target.files[0]; if(!file)return;
    try {
      const data=JSON.parse(await file.text()), incoming=data.progress||data;
      if(!incoming.days) throw new Error("Invalid progress file");
      const base=defaultState();
      for(const d of days) base.days[d.day]={...base.days[d.day],...(incoming.days[d.day]||{})};
      base.capstoneChecks=Array.isArray(incoming.capstoneChecks)?incoming.capstoneChecks:[];
      base.capstoneNotes=incoming.capstoneNotes||"";
      state=base; persist(); alert("Progress imported successfully.");
    } catch(err) { alert("Could not import this file: "+err.message); }
    e.target.value="";
  });
  $("resetBtn").addEventListener("click", () => {
    if(confirm("Reset all 30-day progress, daily notes and capstone checklist in this browser? Export a backup first if you need one.")) {
      state=defaultState(); persist(); renderAll();
    }
  });

  function renderAll() { renderOverview(); renderRoadmap(); renderMilestones(); renderCapstone(); }
  const initial = location.hash.replace("#","");
  renderAll();
  navigate(["overview","roadmap","milestones","capstone"].includes(initial)?initial:"overview");
})();
