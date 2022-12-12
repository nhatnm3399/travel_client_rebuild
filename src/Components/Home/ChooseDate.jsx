<div className={"choose-option-to-booking-home-time-range"} style={{width: "30%"}}>
            <Label title={"Ngày nhận - Ngày trả"} />
            <OutsideClickHandler onOutsideClick={()=> setOpenTime(()=> false)}>
              <div className={"wrap-inp-choose-booking-op"} style={{position: "relative"}}>
                <InputTemplate value={`${startDate && moment(startDate).format("ddd[, ]MMM[ ]D")} - ${endDate ? moment(endDate).format("ddd[, ]MMM[ ]D") : "Check out"}`} readOnly={true} style={{padding: "0 32px", fontSize: 18}} onClick={()=> setOpenTime((prev)=> !prev)} className={"inp-choose-booking-op-ii"} />
                <div className={"dkskalkasass"} style={{position: "absolute", top: 0, left: 0}}>
                  <BsCalendar3 style={{width: 22, height: 22, color: "#333  "}} />
                </div>
                <div className={"dsklasklasksasa"} style={{position: "absolute", top: "100%", left: 0, width: "max-content", display: openTime=== true ? "block" : "none"}}>
                  {
                    <DatePickerPlugin setOpen={setOpenTime} startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
                  }
                </div>
              </div>
            </OutsideClickHandler>
          </div>