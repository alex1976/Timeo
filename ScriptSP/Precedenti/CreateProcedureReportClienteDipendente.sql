USE [Timesheet_Default_v1]
GO

/****** Object:  StoredProcedure [dbo].[ReportOreClienteDipendente]    Script Date: 31/08/2018 16:20:50 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[ReportOreClienteDipendente]
  @Cliente varchar(100),
  @DataInizio datetime,
  @DataFine datetime
AS

SELECT 
C.Description as Cliente, 
E.Description as Dipendente,
TS.Date as Data,
Ordinario=ROUND(SUM(CONVERT(decimal(14,2), TS.Ordinary)), 2),
Extra=ROUND(SUM(CONVERT(decimal(14,2), TS.Overtime)), 2)

FROM Timesheets TS, Customers C, Employees E
WHERE TS.CustomerId = C.CustomerId 
AND TS.EmployeeId = E.EmployeeId
AND C.Description like '%'+@Cliente+'%'
AND TS.Date >= @DataInizio
AND TS.Date <= @DataFine 
	
GROUP BY C.Description, E.Description, TS.Date
ORDER BY C.Description
GO


