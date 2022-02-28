USE [Timesheet_Default_v1]
GO

/****** Object:  StoredProcedure [dbo].[ReportOreClienteDipendente]    Script Date: 17/05/2019 11:40:23 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[ReportOreClienteDipendente]
  @Cliente varchar(100),
  @DataInizio datetime,
  @DataFine datetime
AS

SELECT 
C.Description as Cliente, 
E.Description as Dipendente,
TS.Date as Data,
Ordinario=ROUND(SUM(CONVERT(decimal(14,2), TS.Ordinary)), 2),
Extra=ROUND(SUM(CONVERT(decimal(14,2), TS.Overtime)), 2),
TS.Description as Descrizione

FROM Timesheets TS, Customers C, Employees E
WHERE TS.CustomerId = C.CustomerId 
AND TS.EmployeeId = E.EmployeeId
AND C.Description like '%'+@Cliente+'%'
AND TS.Date >= @DataInizio
AND TS.Date <= @DataFine 
	
GROUP BY TS.Date, C.Description, E.Description, TS.Description
ORDER BY TS.Date

GO


